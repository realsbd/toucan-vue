<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Impact Page">
        <template #options>
          <!-- Size: Large -->
          <base-block rounded>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-large>
              Add New Impact
            </b-button>
          </base-block>
          <!-- END Size: Large -->

          <!-- Large Block Modal -->
          <b-modal id="modal-block-large" size="lg" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Add New Impact</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-large')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <form action="" method="post">                  
                  <base-block rounded>
                    <h1><small>1. Main Impact Information</small></h1>
                      <p>Fill in your basic information to let us know your preferences</p>
                        <b-row>
                          <b-col lg="4">
                              <b-form-group label="When was this Action?" label-for="action date">           
                                <flat-pickr id="example-flatpickr-default" class="form-control bg-white" md="6" xl="3" placeholder="Y-m-d" v-model="dateDefault"></flat-pickr>
                              </b-form-group>
                          </b-col> 
                          <b-col lg="4">  
                              <b-form-group label="Action by" label-for="action by">
                                <v-select multiple v-model="vSelectOptionsMultipleSelected" :options="vSelectOptionsMultiple" placeholder="Select Users"></v-select>
                              </b-form-group>
                          </b-col>
                        </b-row>
                      <b-form-group label="Action Taken (summary)" label-for="action taken">
                          <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
                      </b-form-group>
                      <b-form-group label="Action Type" label-for="action type">
                        <v-select multiple v-model="vSelectOptionsMultipleSelected" :options="vSelectOptionsMultiple" placeholder="select action types"></v-select>
                      </b-form-group>
                  </base-block>
                  <base-block rounded>
                    <h1><small>2. What's the story</small></h1>
                      <p>People here will get to know you with this information</p>
                      <b-form-group label="Is there any stroy that geos with this?" label-for="story">
                          <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
                      </b-form-group>
                        <b-row>
                          <b-col lg="4">
                              <b-form-group label="Which country(s) did this impact?" label-for="countries">
                                <v-select multiple v-model="vSelectOptionsMultipleCountriesSelected" :options="vSelectOptionsMultipleCountries" placeholder="Select Countries affected"></v-select>
                              </b-form-group>
                          </b-col> 
                          <b-col lg="4">  
                              <b-form-group label="Action by" label-for="Categories">
                                <v-select multiple v-model="vSelectOptionsMultipleSelected" :options="vSelectOptionsMultiple" placeholder="Select Categories"></v-select>
                              </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="4">
                              <b-form-group label="Recipients" label-for="Recipients">
                                <v-select multiple v-model="vSelectOptionsMultipleCountriesSelected" :options="vSelectOptionsMultipleCountries" placeholder="Select recipients type"></v-select>
                              </b-form-group>
                          </b-col> 
                          <b-col lg="4">  
                              <b-form-group label="Recipients Total" label-for="Recipients Total">
                                <b-form-input id="recipientTotal" class="form-control-alt" placeholder="Recipients Total"></b-form-input>
                              </b-form-group>
                          </b-col>
                        </b-row>
                  </base-block>
                  <base-block rounded>
                    <h1><small>3. Global Goals</small></h1>
                    <p>Select at least one global goal.</p>
                      <b-form-group label="Select at least one global goal." label-class="font-w600">
                        <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" size="lg"></b-form-checkbox-group>
                      </b-form-group>
                  </base-block>
                  <base-block rounded>
                    <h1><small>4. Extras</small></h1>
                      <b-form-group label="Could this be done again?" label-class="font-w600">
                      <b-form-checkbox-group v-model="selectedRepeatable" :options="optionsRepeatable" switches stacked></b-form-checkbox-group>
                    </b-form-group>
                    <b-form-group label="Qoute or Testimony" label-for="Qoute">
                          <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
                      </b-form-group>
                    <b-form-group label="Source to reference e.g. B1G1" label-for="reference">
                          <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
                      </b-form-group>
                      <b-form-group label="Tags" label-for="Tags">
                        <v-select multiple v-model="vSelectOptionsMultipleTagsSelected" :options="vSelectOptionsMultipleTags" placeholder="Select tags"></v-select>
                      </b-form-group>
                  </base-block>
                  <base-block rounded>
                    <h1><small>5. Learning and Amplyfing</small></h1>
                    <b-form-group label="Any Insights from this Impact?" label-for="Insights">
                          <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
                      </b-form-group>
                    <b-form-group label="How to improve" label-for="improvement">
                          <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
                    </b-form-group>
                    <b-form-group label="When was this Action?" label-for="action date">           
                      <flat-pickr id="example-flatpickr-default" class="form-control bg-white" md="6" xl="3" placeholder="Y-m-d" v-model="dateDefault"></flat-pickr>
                    </b-form-group>
                    <b-form-group label="Could this be made public?" label-class="font-w600">
                      <b-form-checkbox-group v-model="selectedPublicRepeatable" :options="optionsPublicRepeatable" switches></b-form-checkbox-group>
                    </b-form-group>
                  </base-block>
                </form>
              </div>
            </div>
          </b-modal>
          <!-- END Large Block Modal -->
        </template>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th>Action Date</b-th>
              <b-th style="width: 30%;">Action by</b-th>
              <b-th style="width: 30%;">Action type</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Option</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="impact in impacts" :key="impact.id">
              <b-td class="text-center">
                {{ impact.date }}
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${impact.href}`">
                  {{ impact.user }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                {{ impact.actionType }}
              </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-pencil-alt"></i>
                  </b-button>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-times"></i>
                  </b-button>
                </b-btn-group>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Full Table -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// Flatpickr + Custom overrides
@import '~flatpickr/dist/flatpickr.css';
@import './src/assets/scss/vendor/flatpickr';

// Vue Select + Custom overrides
@import '~vue-select/src/scss/vue-select';
@import './src/assets/scss/vendor/vue-select';

// CKEditor Custom overrides
@import './src/assets/scss/vendor/ckeditor';
</style>

<script>
// Flatpickr, for more info and examples you can check out https://github.com/ankurk91/vue-flatpickr-component
import flatPickr from 'vue-flatpickr-component'
// Vue Select, for more info and examples you can check out https://github.com/sagalbot/vue-select
import VueSelect from 'vue-select'

import CKEditor from '@ckeditor/ckeditor5-vue'
// You can import one of the following CKEditor variation (only one at a time)
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  components: {
    flatPickr,
    'v-select': VueSelect,
    ckeditor: CKEditor.component,
  },
  data () {
    return {
      impacts: [
        {
          id: 1,
          date: '12/14/2020',
          user: 'avatar10',
          actionType: 'javascript:void(0)',
        },
        {
          id: 2,
          date: '12/14/2020',
          user: 'avatar2',
          actionType: 'javascript:void(0)',
        },
        {
          id: 3,
          date: '12/14/2020',
          user: 'avatar9',
          actionType: 'javascript:void(0)',
        },
        {
          id: 4,
          date: '12/14/2020',
          user: 'avatar12',
          actionType: 'javascript:void(0)',
        },
        {
          id: 5,
          date: '12/14/2020',
          user: 'avatar4',
          actionType: 'javascript:void(0)',
        }
      ],
      // Flatpickr initial values
      dateDefault: null,
      dateCustom: null,
      dateFriendly: null,
      dateRange: null,
      timeStandalone: null,
      timeStandalone24: null,
      timeDateTime: null,
      timeDateTime24: null,
      inlineDefault: null,
      inlineTime: null,

      // Flatpickr configuration, get more form https://chmln.github.io/flatpickr/options/
      configCustom: { dateFormat: 'd-m-Y' },
      configFriendly: { dateFormat: 'F j, Y' },
      configRange: { mode: 'range', minDate: 'today' },
      configTimeStandalone: { enableTime: true, noCalendar: true, dateFormat: 'H:i' },
      configTimeStandalone24: { enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true },
      configDateTime: { enableTime: true },
      configDateTime24: { enableTime: true, time_24hr: true },
      configInlineDefault: { inline: true },
      configInlineTime: { inline: true, enableTime: true },

      vSelectOptionsMultiple: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
      vSelectOptionsMultipleSelected: null,
      vSelectOptionsMultipleTags: ['HTML', 'CSS', 'JavaScript',],
      vSelectOptionsMultipleTagsSelected: null,
      vSelectOptionsMultipleCountries: ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",],
      vSelectOptionsMultipleCountriesSelected: null,

      ckeditorData: '<p>Hello CKEditor5!</p>',
      ckeditorConfig: {
        // The configuration of the editor
      },
      // Here we specify the editor you've imported before
      // ClassicEditor, InlineEditor, BalloonEditor, BalloonBlockEditor
      ckeditor: ClassicEditor,
      selectedCheckboxes: [],
      optionsCheckboxes: [
        { value: 1, html: '<img src="/img/global/g-1.png" class="img-fluid">' },
        { value: 2, html: '<img src="/img/global/g-2.png" class="img-fluid">' },
        { value: 3, html: '<img src="/img/global/g-3.png" class="img-fluid">' },
        { value: 4, html: '<img src="/img/global/g-4.png" class="img-fluid">' },
        { value: 5, html: '<img src="/img/global/g-3.png" class="img-fluid">' },
        { value: 6, html: '<img src="/img/global/g-1.png" class="img-fluid">' },
        { value: 7, html: '<img src="/img/global/g-2.png" class="img-fluid">' },
      ],
      selectedRepeatable: [],
      optionsRepeatable: [
        {value: 1, text: 'Yes' }
      ],
      selectedPublicRepeatable: [],
      optionsPublicRepeatable: [
        {value: 1, text: 'Yes' }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      // Alert with form input values
      alert(JSON.stringify(this.form))
    },
  }
}
</script>
