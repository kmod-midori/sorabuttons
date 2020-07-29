<template>
  <div class="home">
    <button @click="pauseAll">全部停止</button>
    <input v-model="repeat" type="checkbox" id="repeat" />
    <label for="repeat">洗脑循环</label>
    <input v-model="multi" type="checkbox" id="multi" />
    <label for="repeat">同时播放</label>
    <h2>Sorabuttons</h2>
    <div v-for="(item, i) in audioItems" :key="i">
      <button @click="play(item)">{{ item.label }}</button>
    </div>
  </div>
</template>

<script>
import { srcToFilename } from "../utils";
import { play, updateConfig, pauseAll } from "../player";

export default {
  name: "Home",
  data() {
    return {
      audioItems: [],
      multi: false,
      repeat: false,
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    async loadList() {
      let res = await fetch("/audio.json");
      this.audioItems = await res.json();
    },
    play(item) {
      let srcUrl = "/audio/" + srcToFilename(item.src);
      play(srcUrl);
    },
    updateConfig() {
      updateConfig(this.repeat, this.multi);
    },
    pauseAll() {
      pauseAll();
    },
  },
  watch: {
    multi() {
      this.updateConfig();
    },
    repeat() {
      this.updateConfig();
    },
  },
};
</script>
