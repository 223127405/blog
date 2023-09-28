<template>
  <div id="app">
    <header>
      <h1>Welcome to the Community Event Scheduler</h1>
      <nav>
        <button @click="showPage('home')">Home</button>
        <button @click="showPage('about')">About</button>
      </nav>
    </header>
    <main v-if="currentPage === 'home'">
      <EventList :events="events" @selectEvent="selectEvent" />
    </main>
    <main v-else-if="currentPage === 'about'">
      <GoogleMaps />
    </main>
    <EventDetails :selectedEvent="selectedEvent" v-if="selectedEvent" @goBack="goBack" />
    <!-- Live Chat -->
    <div id="live-chat"></div>
    <!-- End Live Chat -->
  </div>
</template>

<script>
import EventList from './components/EventList.vue';
import EventDetails from './components/EventDetails.vue';
import GoogleMaps from './components/GoogleMaps.vue';

export default {
  data() {
    return {
      events: [
        { id: 1, name: "Workshop on Web Development", date: "2023-09-15", time: "10:00 AM", location: "Community Center", description: "Learn the basics of web development!" },
        { id: 2, name: "Fundraising Gala", date: "2023-09-20", time: "6:30 PM", location: "Grand Ballroom", description: "Help support local charities and causes." },
      ],
      selectedEvent: null,
      currentPage: 'home'
    }
  },
  methods: {
    selectEvent(event) {
      this.selectedEvent = event;
    },
    goBack() {
      this.selectedEvent = null;
    },
    showPage(page) {
      this.currentPage = page;
    }
  },
  components: {
    EventList,
    EventDetails,
    GoogleMaps,
  },
  mounted() {
    // Initialize Intercom
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "q8w905lf"
    };
    if (window.Intercom) {
      window.Intercom('reattach_activator');
      window.Intercom('update', window.intercomSettings);
    } else {
      const d = document;
      const i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      window.Intercom = i;
      const l = function () {
        const s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.intercom.io/widget/q8w905lf';
        const x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };
      if (d.readyState === 'complete') {
        l();
      } else if (window.attachEvent) {
        window.attachEvent('onload', l);
      } else {
        window.addEventListener('load', l, false);
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  background: linear-gradient(to bottom, #4a90e2, #36d1dc);
  color: #fff;
}

header {
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  padding: 20px;
}

h1 {
  margin: 0;
}

nav {
  margin-top: 10px;
}

nav button {
  margin: 0 10px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

#live-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

body::before {
  content: none;
}
</style>
