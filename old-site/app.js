const packages = {
  instagram: [
    {
      name: "Starter Package",
      price: "$25",
      features: ["4K-5K Followers", "1 Page Permanent Post", "Story Promotion"],
    },
    {
      name: "Growth Package",
      price: "$45",
      featured: true,
      features: ["10K Followers", "2 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Premium Package",
      price: "$80",
      features: ["20K Followers", "3 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Ultimate Package",
      price: "$150",
      features: [
        "50K Followers",
        "All Pages Promotion",
        "Permanent Posts",
        "Story Promotion",
        "Story Highlight",
        "Priority Support",
      ],
    },
  ],
  tiktok: [
    {
      name: "Starter Package",
      price: "$50",
      features: ["5K new Followers", "1 Page Permanent Post", "Story Promotion"],
    },
    {
      name: "Growth Package",
      price: "$95",
      features: ["10K Followers", "2 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Premium Package",
      price: "$180",
      features: ["20K Followers", "3 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Ultimate Package",
      price: "$320",
      features: [
        "50K Followers",
        "All Pages Promotion",
        "Permanent Posts",
        "Story Promotion",
        "Story Highlight",
      ],
    },
  ],
};

const orderEmail = "support@velnorworld.shop";
const grid = document.querySelector("#package-grid");
const tabs = document.querySelectorAll(".tab");
const planCards = document.querySelectorAll(".plan-card");

function renderPackages(platform) {
  grid.innerHTML = packages[platform]
    .map(
      (item) => `
        <article class="package-card${item.featured ? " is-featured" : ""}">
          <div class="card-top">
            <div>
              ${item.featured ? '<span class="badge">Most popular</span>' : ""}
              <h3>${item.name}</h3>
            </div>
            <p class="package-price">${item.price}</p>
          </div>
          <ul class="package-list">
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <a class="button ${item.featured ? "button-primary" : "button-secondary"}" href="mailto:${orderEmail}?subject=${encodeURIComponent(`${platform} ${item.name}`)}&body=${encodeURIComponent(`Package: ${item.name}\nPlatform: ${platform}\nPrice: ${item.price}\nProfile link:\nCampaign notes:`)}">
            Choose plan
          </a>
        </article>
      `,
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const platform = tab.dataset.platform;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    renderPackages(platform);
  });
});

renderPackages("instagram");

planCards.forEach((card) => {
  card.addEventListener("click", () => {
    planCards.forEach((item) => {
      const isSelected = item === card;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-checked", String(isSelected));
    });
  });
});
