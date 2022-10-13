class GitRepository {
  constructor(gitRepositorySelector = "", user = "", skippedRepos = [], limit = 5) {
    this.apiEndpoint = `https://api.github.com/users/${user}/repos`;
    this.user = user;
    this.skippedRepos = skippedRepos;
    this.gitRepositorySelector = gitRepositorySelector;
    this.limit = limit;
    this.gitRepository = null;
    this.apiResponse = null;
    this.fetchData = () =>
      fetch(this.apiEndpoint)
        .then((response) => response.json())
        .then((json) => this.apiResponse = json);
  }

  createLink(url, text) {
    const link = document.createElement("a");

    link.classList.add("projects__link");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    link.innerText = text;

    return link;
  }

  createHeading(text) {
    const heading = document.createElement("h3");

    heading.classList.add("projects__title");
    heading.innerText = text;

    return heading;
  }

  createListItem() {
    const listItem = document.createElement("li");

    listItem.classList.add("projects__item");

    return listItem;
  }

  init() {
    this.gitRepository = document.querySelector(this.gitRepositorySelector);
    this.fetchData().then(() => {
      this.apiResponse.sort((a, b) => b["name"].length - a["name"].length);

      this.counter = 0;
      this.apiResponse.forEach((item) => {
        if (
          item["name"].toLowerCase() === this.user.toLowerCase() ||
          this.skippedRepos.includes(item["name"].toLowerCase()) ||
          this.counter >= this.limit
        ) {
          return;
        }

        const listItem = this.createListItem();

        listItem.appendChild(this.createHeading(item["name"]));
        listItem.appendChild(this.createLink(item["html_url"], "code"));

        this.gitRepository.appendChild(listItem);
        this.counter++;
      });
    });
  }
}

export default GitRepository;
