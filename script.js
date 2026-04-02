const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const collapsibleControllers = new WeakMap();
const collapsibleLists = document.querySelectorAll("[data-collapsible-list]");

collapsibleLists.forEach((list) => {
  const visibleCount = Number(list.getAttribute("data-visible-count")) || 4;
  const itemSelector = list.getAttribute("data-item-selector") || ".award-item";
  const items = Array.from(list.querySelectorAll(itemSelector));
  const toggleButton = list.nextElementSibling;

  if (!toggleButton || items.length <= visibleCount) {
    if (toggleButton) {
      toggleButton.hidden = true;
    }
    return;
  }

  const syncListState = (expanded) => {
    items.forEach((item, index) => {
      item.classList.toggle("is-hidden", !expanded && index >= visibleCount);
    });

    toggleButton.textContent = expanded ? "收起" : "查看更多";
    toggleButton.setAttribute("aria-expanded", String(expanded));
  };

  syncListState(false);
  collapsibleControllers.set(list, {
    apply(expanded) {
      syncListState(expanded);
    },
    collapse() {
      syncListState(false);
    },
    expand() {
      syncListState(true);
    },
    button: toggleButton,
  });

  toggleButton.addEventListener("click", () => {
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    syncListState(!expanded);
  });
});

const publicationFilters = document.querySelector("[data-publication-filters]");
const publicationList = document.querySelector(".publication-list");

if (publicationFilters && publicationList) {
  const publicationItems = Array.from(publicationList.querySelectorAll(".publication-item"));
  const filterButtons = Array.from(publicationFilters.querySelectorAll("[data-filter-value]"));
  const controller = collapsibleControllers.get(publicationList);
  let activeFilter = null;

  const applyPublicationFilter = () => {
    filterButtons.forEach((button) => {
      const isActive = button.getAttribute("data-filter-value") === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (!activeFilter) {
      publicationItems.forEach((item) => {
        item.classList.remove("is-filtered-out");
      });

      if (controller) {
        controller.collapse();
        controller.button.hidden = false;
      }
      return;
    }

    publicationItems.forEach((item) => {
      const matches = Boolean(item.querySelector(`.tag-theme.${activeFilter}`));
      item.classList.toggle("is-filtered-out", !matches);
      item.classList.remove("is-hidden");
    });

    if (controller) {
      controller.button.hidden = true;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextFilter = button.getAttribute("data-filter-value");
      activeFilter = activeFilter === nextFilter ? null : nextFilter;
      applyPublicationFilter();
    });
  });

  applyPublicationFilter();
}

const teachingAccordions = document.querySelectorAll(".teaching-accordion");

teachingAccordions.forEach((accordion) => {
  const indicator = accordion.querySelector(".accordion-indicator");

  if (!indicator) {
    return;
  }

  const syncIndicator = () => {
    indicator.textContent = accordion.open ? "收起内容" : "展开内容";
  };

  syncIndicator();
  accordion.addEventListener("toggle", syncIndicator);
});
