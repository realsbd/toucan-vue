<template>
  <div>

    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Action Type">
        <template #options>
          <!-- Default Variation -->
          <base-block rounded>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-normal>
              Add New Action Type
            </b-button>
          </base-block>
          <!-- END Default Variation -->

          <!-- Normal Block Modal -->
          <b-modal id="modal-block-normal" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Add New Action Type</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-normal')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
                <b-form class="block-content font-size-sm" @submit="onSubmit">
                  <b-form-group label="Action Type" label-for="Add new Action Type">
                    <b-form-input id="actionType" name="actionType" placeholder="Add new Action Type"></b-form-input>
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
              <b-th>Action Type</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="actionType in actionTypes" :key="actionType.id">
              <b-td class="font-w600 font-size-sm">
                <a :href="`${actionType.href}`">
                  {{ actionType.name }}
                </a>
              </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button size="md" variant="alt-primary">
                    <i class="fa fa-fw fa-pencil-alt"></i>
                  </b-button>
                  <b-button size="md" variant="alt-primary">
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
export default {
  data () {
    return {
      actionTypes: [
        {
          id: 1,
          name: 'Adam McCoy',
        },
        {
          id: 2,
          name: 'Betty Kelley',
        },
        {
          id: 3,
          name: 'Jesse Fisher',
        },
        {
          id: 4,
          name: 'Ryan Flores',
        },
        {
          id: 5,
          name: 'Alice Moore',
        }
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
