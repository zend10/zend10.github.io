<template>
  <div id="gallery">
    <Loading v-bind:isLoading="data.isLoading"/>
    <div id="image-container">
      <GalleryItem v-for="image in data.gallery" v-bind:key="image.id" v-bind:data="image" v-on:click.native="openModal(image)"/>
    </div>
    <div class="modal" v-if="data.selectedImage" v-on:click="closeModal()">
      <span class="close" v-on:click="closeModal()">&times;</span>
      <img class="modal-image" v-bind:src="data.selectedImage.imagePath">
      <div class="modal-name">{{ data.selectedImage.name }}</div>
      <div class="modal-date">{{ data.selectedImage.date }}</div>
      <div class="modal-caption">{{ data.selectedImage.caption }}</div>
    </div>
  </div>
</template>

<script>
import Loading from '@/layouts/Loading.vue'
import GalleryItem from '@/components/GalleryItem.vue'
import firebase from '@/firebase.js'

let data = {
  gallery: [],
  isLoading: true,
  selectedImage: null
}

export default {
  name: 'Gallery',
  components: {
    Loading,
    GalleryItem,
  },
  data() {
    return {
      data
    }
  },
  methods: {
    openModal: function(image) {
      data.selectedImage = image
    },
    closeModal: function() {
      data.selectedImage = null
    } 
  }
}

firebase.database().ref('gallery').once('value').then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    data.gallery.push(childSnapshot.val())
    data.isLoading = false
  })
})
</script>

<style scoped lang="scss">
#image-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-right: -1vw;
  margin-bottom: -1vw;
}

#image-container .gallery-item {
  width: 25vw;
  height: 25vw;
  margin-right: 1vw;
  margin-bottom: 1vw;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 2vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-image {
  margin: auto;
  display: block;
  width: auto;
  height: 80vh;
  max-width: 700px;
}

.modal-name, .modal-date, .modal-caption {
  display: block;
  margin: auto;
  max-width: 700px;
  text-align: center;
  color: white;
}

.modal-name {
  margin-top: 2vh;
  height: 5vh;
  font-size: 1.2rem;
}

.modal-caption {
  padding: 2vh;
  margin-bottom: 2vh;
  font-size: 0.9rem;
}

.modal-image, .modal-name, .modal-date, .modal-caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover, .close:focus {
  color: #BBB;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-image {
    width: 100%;
  }
}
</style>
