<template>
  <div class="max-w-2xl mx-auto rounded-xl p-4">
    <h2 class="text-2xl font-bold mb-4">Add Car</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Make -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Make</span>
        </label>
        <input
          v-model="form.Make"
          type="text"
          placeholder="Enter car make"
          class="input input-bordered w-full"
          required
        />
      </div>

      <!-- Model Name -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Model Name</span>
        </label>
        <input
          v-model="form.ModelName"
          type="text"
          placeholder="Enter model name"
          class="input input-bordered w-full"
          required
        />
      </div>

      <!-- Year -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Year</span>
        </label>
        <input
          v-model="form.Year"
          type="number"
          placeholder="Enter year"
          class="input input-bordered w-full"
          min="1900"
          :max="new Date().getFullYear()"
          required
        />
      </div>

      <!-- Engine Size -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Engine Size (L)</span>
        </label>
        <input
          v-model="form.EngineSize"
          type="number"
          placeholder="Enter engine size"
          class="input input-bordered w-full"
          step="0.1"
          min="0"
          required
        />
      </div>

      <!-- Fuel Type -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Fuel Type</span>
        </label>
        <select
          v-model="form.FuelType"
          class="select select-bordered w-full"
          required
        >
          <option value="" disabled>Select fuel type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <!-- Transmission -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Transmission</span>
        </label>
        <select
          v-model="form.Transmission"
          class="select select-bordered w-full"
          required
        >
          <option value="" disabled>Select transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </div>

      <!-- Drag and Drop Image Upload -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Upload Images (Max 2MB per file)</span>
        </label>
        <div
          @dragover.prevent="dragOver"
          @drop.prevent="handleDrop"
          @click="triggerFileInput"
          class="border-2 border-dashed border-base-300 rounded-lg p-6 text-center cursor-pointer hover:bg-base-100 transition-colors"
          :class="{ 'border-primary': isDragging }"
        >
          <p v-if="!form.images.length" class="text-base-content">
            Drag & drop images here or click to upload
          </p>
          <div v-else class="space-y-2">
            <div
              v-for="(image, index) in form.images"
              :key="index"
              class="flex items-center justify-between p-2 bg-base-100 rounded-lg"
            >
              <span class="text-sm">{{ image.name }}</span>
              <button
                type="button"
                @click.stop="removeImage(index)"
                class="btn btn-xs btn-error"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <input
          type="file"
          ref="fileInput"
          @change="handleFileChange"
          class="hidden"
          accept="image/*"
          multiple
        />
        <p v-if="error" class="text-error mt-2">{{ error }}</p>
      </div>

      <!-- Submit Button -->
      <div class="form-control mt-6">
        <button type="submit" class="btn btn-primary w-full">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axiosInstance from '@/utils/axios';
import { MAX_FILES_LIMIT } from '@/lib/constants';

const initImages: File[] = [];
const form = ref({
  Make: '',
  ModelName: '',
  Year: null,
  EngineSize: null,
  FuelType: '',
  Transmission: '',
  images: initImages,
});

const isDragging = ref(false);
const error = ref('');
const fileInput = ref<HTMLInputElement>();

const dragOver = () => {
  isDragging.value = true;
};

const handleDrop = async (e: DragEvent) => {
  isDragging.value = false;
  const files = e.dataTransfer?.files;
  if(files != undefined) {
    await handleFiles(files);
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = async (e: Event) => {
  const files = (e.target as HTMLInputElement)?.files;
  if(files != null) {
    await handleFiles(files);
  }
};

const handleFiles = async (files: FileList) => {
  if (files.length > MAX_FILES_LIMIT) {
    return null
  }
  error.value = '';
  for (const file of files) {
    if (!file.type.startsWith('image/')) {
      error.value = 'Only image files are allowed.';
      continue;
    }
    if (file.size > 2 * 1024 * 1024) {
      error.value = 'File size must be less than 2MB.';
      continue;
    }
    form.value.images.push(file);
  }
};

const removeImage = (index: number) => {
  form.value.images.splice(index, 1);
};

const handleSubmit = async () => {
  if (form.value.images.length > MAX_FILES_LIMIT) {
    return null
  }
  console.log('Form Data:', form.value);
  const formData = new FormData();

  // Append each file to the FormData object
  form.value.images.forEach((file: File) => {
      formData.append('images', file);
  });

  try {
    var imageURLs = []
    if(form.value.images.length > 0) {
      // Send a POST request to your Go server
      const { data } = await axiosInstance.post('/api/cars/upload-images', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
      imageURLs = data.urls;

      // Handle the response from the server
      console.log('Uploaded successfully:', imageURLs);

    }

    const carUploadResponse = await axiosInstance.post('/api/cars', {
       "make": form.value.Make,
       "modelName": form.value.ModelName,
       "year": form.value.Year,
       "engineSize": form.value.EngineSize,
       "fuelType": form.value.FuelType,
       "transmission": form.value.Transmission,
       "imageURLs": imageURLs
     });

  } catch (error) {
        // Handle any errors
    console.error('Error uploading images:', error);
  }

  // Add your submission logic here (e.g., API call)
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
