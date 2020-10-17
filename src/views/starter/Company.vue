<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Companies">
        <template #options>
          <!-- Default Variation -->
          <base-block rounded>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-normal>
              Add New Company
            </b-button>
          </base-block>
          <!-- END Default Variation -->

          <!-- Normal Block Modal -->
          <b-modal id="modal-block-normal" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Add New Company</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-normal')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
                <b-form class="block-content font-size-sm" @submit="onSubmit">
                  <b-form-group label="Upload Image" label-for="Upload Image">
                    <b-form-file id="logo" name="logo" plain></b-form-file>
                  </b-form-group>
                  <b-form-group label="Company" label-for="Company Name">
                    <b-form-input id="name" name="name" placeholder="Company Name"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Email" label-for="Add Email">
                    <b-form-input id="email" name="email" placeholder="Add Company Email"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Website" label-for="Add Website">
                    <b-form-input id="website" name="website" placeholder="Add Company Website"></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <v-select multiple v-model="vSelectOptionsMultipleSelected" :options="vSelectOptionsMultiple" placeholder="Select user(s)"></v-select>
                  </b-form-group>
                  <b-form-group>
                    <b-button type="submit" size="sm" variant="primary">
                      Submit
                    </b-button>
                  </b-form-group>
                </b-form>
            </div>
          </b-modal>
          <!-- END Normal Block Modal -->
        </template>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 100px;">
                <i class="far fa-user"></i>
              </b-th>
              <b-th>Name</b-th>
              <b-th style="width: 30%;">Email</b-th>
              <b-th style="width: 15%;">Website</b-th>
              <b-th style="width: 15%;">Users</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="company in companies" :key="company.id">
              <b-td class="text-center">
                <img class="img-avatar img-avatar48" :src="`img/avatars/${company.avatar}.jpg`" alt="Avatar">
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${company.href}`">
                  {{ company.name }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                client{{ company.id }}<em class="text-muted">@example.com</em>
              </b-td>
              <b-td>
                {{ company.website }}
              </b-td>
              <b-td>
                {{ company.users }}
                <!-- <b-badge :variant="company.labelVariant">{{ company.labelText }}</b-badge> -->
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

<script>
import VueSelect from 'vue-select'
export default {
  components: {
    'v-select': VueSelect,
  },
  data () {
    return {
      companies: [
        {
          id: 1,
          name: 'Adam McCoy',
          avatar: 'avatar10',
          href: 'javascript:void(0)',
          website: 'lorem.com',
          users: [
            'avatar10',
            'avatar10',
            'avatar10'
          ]
        },
        {
          id: 2,
          name: 'Betty Kelley',
          avatar: 'avatar2',
          href: 'javascript:void(0)',
          website: 'lorem.com',
          users: [
            'avatar10',
            'avatar10',
            'avatar10'
          ]
        },
        {
          id: 3,
          name: 'Jesse Fisher',
          avatar: 'avatar9',
          href: 'javascript:void(0)',
          website: 'lorem.com',
          users: [
            'avatar10',
            'avatar10',
            'avatar10'
          ]
        },
        {
          id: 4,
          name: 'Ryan Flores',
          avatar: 'avatar12',
          href: 'javascript:void(0)',
          website: 'lorem.com',
          users: [
            'avatar10',
            'avatar10',
            'avatar10'
          ]
        },
        {
          id: 5,
          name: 'Alice Moore',
          avatar: 'avatar4',
          href: 'javascript:void(0)',
          website: 'lorem.com',
          users: [
            'avatar10',
            'avatar10',
            'avatar10'
          ]
        }
      ],
      vSelectOptionsMultiple: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
      vSelectOptionsMultipleSelected: null,
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
