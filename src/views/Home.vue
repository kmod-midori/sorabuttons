<template>
  <div class="home">
    <div class="bd dashed pd-1 radius-4">
      <div class="control">
        <button class="button button-red" @click="pauseAll">全部停止</button>
      </div>
      <div class="control">
        <input v-model="repeat" type="checkbox" id="repeat" />
        <label for="repeat">洗脑循环</label>
      </div>
      <div class="control">
        <input v-model="multi" type="checkbox" id="multi" />
        <label for="repeat">同时播放</label>
      </div>
    </div>
    <div class="pd-1 pl-0">
      <h2 class="pd-1 pl-0">Sorabuttons</h2>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=chengyuhui&repo=sorabuttons&type=star&count=true"
        frameborder="0"
        scrolling="0"
        width="100"
        height="20"
        title="GitHub"
      ></iframe>
      <a href="https://space.bilibili.com/402401719">
        <img src="https://img.shields.io/badge/Bilibili-402401719-blue" />
      </a>
    </div>
    <div id="buttons">
      <div class="audio-btn-wrapper" v-for="(item, i) in audioItems" :key="i">
        <button class="button" @click="play(item)">{{ item.label }}</button>
      </div>
    </div>
    <div class="card-box pd-1" v-if="lastPlayed !== null">
      <h3 class="pb-1">{{ lastPlayed.label }}</h3>
      <div>
        <p>
          来源：<a :href="lastPlayed.src.url">{{ lastPlayed.src.url }}</a>
        </p>
        <p>时间：{{ lastPlayed.src.start }}</p>
      </div>
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
      lastPlayed: null,
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
      this.lastPlayed = item;
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

<style lang="scss">
.home {
  margin: 1em;
  padding: 1em;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
}
button {
  border: 1px solid grey;
  border-radius: 6px;
}
.audio-btn-wrapper {
  display: inline-block;
  margin-right: 1em;
  margin-bottom: 1em;
}

.control {
  display: inline-block;
  padding: 1em;
  label {
    margin-left: 1em;
  }
}
</style>
