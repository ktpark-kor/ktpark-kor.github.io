// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-pi",
          title: "PI",
          description: "Welcome to the Process Systems and Simulation Lab. Here, you can find information about the Principal Investigator.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "People",
          description: "members of the PSSL",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Process Systems and Simulation Laboratory (PSSL) Publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-graduation-ceremony",
          title: 'Graduation Ceremony.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250224.html";
            },},{id: "news-the-website-for-the-pssl-research-lab-has-been-launched-sparkles-smile",
          title: 'The website for the PSSL research lab has been launched. :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-new-papers-have-been-published-tada-smile-thank-you-for-jieun-lee-s-hard-work-if-you-want-to-read-the-paper-please-visit-here",
          title: 'New papers have been published. :tada: :smile: Thank you for Jieun Lee’s hard...',
          description: "",
          section: "News",},{id: "news-yeonji-39-s-farewell-party",
          title: 'Yeonji&amp;#39;s farewell party!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250828.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
