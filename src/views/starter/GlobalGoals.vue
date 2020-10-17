<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Global Goal">
        <template #options>
          <!-- Default Variation -->
          <base-block rounded>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-normal>
              Add New Global Goal
            </b-button>
          </base-block>
          <!-- END Default Variation -->

          <!-- Normal Block Modal -->
          <b-modal id="modal-block-normal" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Add New Global Goal</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-normal')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
                <b-form class="block-content font-size-sm" @submit="onSubmit">
                  <b-form-group label="Upload Image" label-for="Upload Image">
                    <b-form-file id="globalImg" name="globalImg" plain></b-form-file>
                  </b-form-group>
                  <b-form-group label="Label" label-for="Add new Label">
                    <b-form-input id="label" name="label" placeholder="Add new Label"></b-form-input>
                  </b-form-group>
                  <b-form-group label="link" label-for="Add new link">
                    <b-form-input id="link" name="link" placeholder="Add new link"></b-form-input>
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
              <b-th>Label</b-th>
              <b-th style="width: 30%;">Link</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="globalGoal in globalGoals" :key="globalGoal.id">
              <b-td class="text-center">
                <img class="img-avatar img-avatar48" :src="`img/avatars/${globalGoal.avatar}.jpg`" alt="Avatar">
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${globalGoal.href}`">
                  {{ globalGoal.label }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                client{{ globalGoal.id }}<em class="text-muted">@example.com</em>
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
export default {
  data () {
    return {
      globalGoals: [
        {
          id: 1,
          label: 'Adam McCoy',
          avatar: 'avatar10',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP'
        },
        {
          id: 2,
          label: 'Betty Kelley',
          avatar: 'avatar2',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          labelText: 'Business'
        },
        {
          id: 3,
          label: 'Jesse Fisher',
          avatar: 'avatar9',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          labelText: 'Personal'
        },
        {
          id: 4,
          label: 'Ryan Flores',
          avatar: 'avatar12',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          labelText: 'Trial'
        },
        {
          id: 5,
          label: 'Alice Moore',
          avatar: 'avatar4',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          labelText: 'Disabled'
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
