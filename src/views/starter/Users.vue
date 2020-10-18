<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Users">
        <template #options>
          <!-- Default Variation -->
          <base-block rounded>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-normal>
              Add New User
            </b-button>
          </base-block>
          <!-- END Default Variation -->

          <!-- Normal Block Modal -->
          <b-modal id="modal-block-normal" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Add New User</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-normal')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
                <b-form class="block-content font-size-sm" @submit="onSubmit">
                  <b-form-group label="First Name" label-for="First Name">
                    <b-form-input id="firstName" name="firstName" placeholder="First Name"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Last Name" label-for="Last Name">
                    <b-form-input id="lastName" name="lastName" placeholder="Last Name"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Email" label-for="Add Email">
                    <b-form-input id="email" name="email" placeholder="Add Company Email"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="Add Password">
                    <b-form-input id="password" name="password" placeholder="Password"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Confirm Password" label-for="Confirm Password">
                    <b-form-input id="password" name="password" placeholder="Confirm Password"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Website" label-for="Add Website">
                    <b-form-input id="website" name="website" placeholder="Add Company Website"></b-form-input>
                  </b-form-group>
                  <!-- <b-form-group>
                    <v-select multiple v-model="vSelectOptionsMultipleSelected" :options="vSelectOptionsMultiple" placeholder="Select user(s)"></v-select>
                  </b-form-group> -->
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
              <b-th>First Name</b-th>
              <b-th>Last Name</b-th>
              <b-th style="width: 30%;">Email</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="user in users" :key="user.id">
              <b-td class="font-w600 font-size-sm">
                  {{ user.firstName }}
              </b-td>
              <b-td class="font-w600 font-size-sm">
                  {{ user.lastName }}
              </b-td>
              <b-td class="font-w600 font-size-sm">
                  {{ user.email }}
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
  @import '~vue-select/src/scss/vue-select';
  @import './src/assets/scss/vendor/vue-select';
</style>

<script>
// import VueSelect from 'vue-select'
export default {
  components: {
    // 'v-select': VueSelect,
  },
  data () {
    return {
      users: [
        {
          id: 1,
          firstName: 'Adam McCoy',
          lastName: 'avatar10',
          email: 'abc@def.com',
          password: 'password'
        },
        {
          id: 2,
          firstName: 'Betty Kelley',
          lastName: 'avatar2',
          email: 'abc@def.com',
          password: 'password'
        },
        {
          id: 3,
          firstName: 'Jesse Fisher',
          lastName: 'avatar9',
          email: 'abc@def.com',
          password: 'password'
        },
        {
          id: 4,
          firstName: 'Ryan Flores',
          lastName: 'avatar12',
          email: 'abc@def.com',
          password: 'password'
        },
        {
          id: 5,
          firstName: 'Alice Moore',
          lastName: 'avatar4',
          email: 'abc@def.com',
          password: 'password'
        }
      ],
      // vSelectOptionsMultiple: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
      // vSelectOptionsMultipleSelected: null,
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
