<template>
  <section class="event-details" v-if="selectedEvent">
    <div class="event-details-container">
      <h2>{{ selectedEvent.name }}</h2>
      <p class="event-info">Date: {{ selectedEvent.date }}</p>
      <p class="event-info">Time: {{ selectedEvent.time }}</p>
      <p class="event-info">Location: {{ selectedEvent.location }}</p>
      <p class="event-info description">{{ selectedEvent.description }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    selectedEvent: Object
  },
  methods: {
    goBack() {
      this.$emit('goBack');
    }
  }
}
</script>

<style scoped>
.event-details {
  text-align: center;
}

.event-details-container {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  max-width: 800px;
  width: 100%;
}

h2 {
  color: #333;
}

.event-info {
  font-size: 16px;
  margin: 8px 0;
  color: #555;
}

.event-info.description {
  font-style: italic;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>

