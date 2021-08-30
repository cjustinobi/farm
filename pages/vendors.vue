<template>
  <div>
    <a-page-header sub-title="Vendors">
      <template slot="extra">
        <a-button type="primary" @click="visible = true">Add Vendor</a-button>
      </template>
    </a-page-header>
    <div>
      <a-modal v-model="visible" title="Add Vendor" @ok="addVendor">
        <a-input v-model="details.name" placeholder="Name"/>
        <a-input v-model="details.Phone" placeholder="Phone"/>
        <a-input v-model="details.email" placeholder="Email"/>
      </a-modal>
    </div>
    <a-table :columns="columns" :data-source="data" rowKey="id" size="small">
      <span slot="status" slot-scope="status">
       <a-tag :color="status ? 'green' : 'volcano'">{{ status ? 'Enabled' : 'Disabled'}}</a-tag>
      </span>
      <span slot="action" slot-scope="item">
          <a-popconfirm
            :title="`Sure you want to ${item.status ? 'disable' : 'enable'} vendor?`"
            ok-text="Yes"
            cancel-text="No"
            @confirm="disableEnableVendor(item)"
            @cancel="popconfirm = false"
          >
          <a href="#">{{ item.status ? 'Disable Vendors' : 'Enable Vendors' }}</a>
        </a-popconfirm>
        <a-button @click="editItem(item)" type="primary"> Edit</a-button>
      </span>

    </a-table>
  </div>
</template>

<script>
  const columns = [
    { title: 'Name', dataIndex: 'name'},
    { title: 'Status', dataIndex: 'status', scopedSlots: { customRender: 'status' }},
    {title: 'Action',  scopedSlots: { customRender: 'action' }}
    ]

  const data = [
    { name: 'John Doe', phone: 123123123, email: 'john@doe.com', status: 0 },
    { name: 'John Doe', phone: 123123123, email: 'john@doe.com', status: 1 },
    { name: 'John Doe', phone: 123123123, email: 'john@doe.com', status: 0 },
    { name: 'John Doe', phone: 123123123, email: 'john@doe.com', status: 1 },
  ]
  export default {
    layout: 'dashboard',
    name: 'menus',
    data() {
      return {
        data,
        columns,
        popconfirm: false,
        visible: false,
        editMode: false,
        details: {
          name: '',
          phone: '',
          email: ''
        },


        vendors: []
      }
    },
    methods: {
      async addVendor() {

      },

      editItem(item) {
        this.showModal()
        this.itemId = item.id
        this.name = item.name
        this.editMode = true

      },
      async disableEnableVendor(item) {
        return
        const res = await this.$axios.$put(`vendor/enable-disable/${item.id}`,
          {status: !item.status}
        )
      },
      showModal() {
        this.visible = true
      },
      reset() {
        this.visible = false
        this.editMode = false
        this.name = ''
        this.restaurantId = ''
      }
    },
    beforeMount() {
      // this.getVendors()
    }
  }
</script>

<style scoped>

</style>
