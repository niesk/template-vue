import service from '@/utils/request'

/**
 * uploads an image
 * @param {object} path - 路由参数
 * @param {integer} path.petId - ID of pet to update
 * @param {object} formData - 表单数据
 * @param {string} formData.additionalMetadata - Additional data to pass to server
 * @param {file} formData.file - file to upload
 */
export function postPetPetIdUploadImage(path, formData) {
  return service({
    url: `/pet/${path.petId}/uploadImage`,
    method: 'post',
    data: formData,
  })
}
/**
 * Add a new pet to the store
 * @param {object} body - empty
 * @param {integer} body.id - empty
 * @param {object} body.category - empty
 * @param {integer} body.category.id - empty
 * @param {string} body.category.name - empty
 * @param {string} body.name - empty
 * @param {array} body.photoUrls - empty
 * @param {string} body.photoUrls[] - empty
 * @param {array} body.tags - empty
 * @param {object} body.tags[] - empty
 * @param {integer} body.tags[].id - empty
 * @param {string} body.tags[].name - empty
 * @param {string} body.status - pet status in the store
 */
export function postPet(body) {
  return service({
    url: '/pet',
    method: 'post',
    data: body,
  })
}
/**
 * Update an existing pet
 * @param {object} body - empty
 * @param {integer} body.id - empty
 * @param {object} body.category - empty
 * @param {integer} body.category.id - empty
 * @param {string} body.category.name - empty
 * @param {string} body.name - empty
 * @param {array} body.photoUrls - empty
 * @param {string} body.photoUrls[] - empty
 * @param {array} body.tags - empty
 * @param {object} body.tags[] - empty
 * @param {integer} body.tags[].id - empty
 * @param {string} body.tags[].name - empty
 * @param {string} body.status - pet status in the store
 */
export function putPet(body) {
  return service({
    url: '/pet',
    method: 'put',
    data: body,
  })
}
/**
 * Finds Pets by status
 * @param {object} query - 查询条件
 * @param {array} query.status - Status values that need to be considered for filter
 */
export function getPetFindByStatus(query) {
  return service({
    url: '/pet/findByStatus',
    method: 'get',
    params: query,
  })
}
/**
 * Finds Pets by tags
 * @param {object} query - 查询条件
 * @param {array} query.tags - Tags to filter by
 */
export function getPetFindByTags(query) {
  return service({
    url: '/pet/findByTags',
    method: 'get',
    params: query,
  })
}
/**
 * Find pet by ID
 * @param {object} path - 路由参数
 * @param {integer} path.petId - ID of pet to return
 */
export function getPetPetId(path) {
  return service({
    url: `/pet/${path.petId}`,
    method: 'get',
  })
}
/**
 * Updates a pet in the store with form data
 * @param {object} path - 路由参数
 * @param {integer} path.petId - ID of pet that needs to be updated
 * @param {object} formData - 表单数据
 * @param {string} formData.name - Updated name of the pet
 * @param {string} formData.status - Updated status of the pet
 */
export function postPetPetId(path, formData) {
  return service({
    url: `/pet/${path.petId}`,
    method: 'post',
    data: formData,
  })
}
/**
 * Deletes a pet
 * @param {object} path - 路由参数
 * @param {integer} path.petId - Pet id to delete
 */
export function deletePetPetId(path) {
  return service({
    url: `/pet/${path.petId}`,
    method: 'delete',
  })
}
/**
 * Place an order for a pet
 * @param {object} body - empty
 * @param {integer} body.id - empty
 * @param {integer} body.petId - empty
 * @param {integer} body.quantity - empty
 * @param {string} body.shipDate - empty
 * @param {string} body.status - Order Status
 * @param {boolean} body.complete - empty
 */
export function postStoreOrder(body) {
  return service({
    url: '/store/order',
    method: 'post',
    data: body,
  })
}
/**
 * Find purchase order by ID
 * @param {object} path - 路由参数
 * @param {integer} path.orderId - ID of pet that needs to be fetched
 */
export function getStoreOrderOrderId(path) {
  return service({
    url: `/store/order/${path.orderId}`,
    method: 'get',
  })
}
/**
 * Delete purchase order by ID
 * @param {object} path - 路由参数
 * @param {integer} path.orderId - ID of the order that needs to be deleted
 */
export function deleteStoreOrderOrderId(path) {
  return service({
    url: `/store/order/${path.orderId}`,
    method: 'delete',
  })
}
/**
 * Returns pet inventories by status
 */
export function getStoreInventory() {
  return service({
    url: '/store/inventory',
    method: 'get',
  })
}
/**
 * Creates list of users with given input array
 * @param {array} body - empty
 * @param {object} body[] - empty
 * @param {integer} body[].id - empty
 * @param {string} body[].username - User Name
 * @param {string} body[].firstName - User First Name
 * @param {string} body[].lastName - User Last Name
 * @param {string} body[].email - User email
 * @param {string} body[].password - User password
 * @param {string} body[].phone - User phone
 * @param {integer} body[].userStatus - User Status
 */
export function postUserCreateWithArray(body) {
  return service({
    url: '/user/createWithArray',
    method: 'post',
    data: body,
  })
}
/**
 * Creates list of users with given input array
 * @param {array} body - empty
 * @param {object} body[] - empty
 * @param {integer} body[].id - empty
 * @param {string} body[].username - User Name
 * @param {string} body[].firstName - User First Name
 * @param {string} body[].lastName - User Last Name
 * @param {string} body[].email - User email
 * @param {string} body[].password - User password
 * @param {string} body[].phone - User phone
 * @param {integer} body[].userStatus - User Status
 */
export function postUserCreateWithList(body) {
  return service({
    url: '/user/createWithList',
    method: 'post',
    data: body,
  })
}
/**
 * Get user by user name
 * @param {object} path - 路由参数
 * @param {string} path.username - The name that needs to be fetched. Use user1 for testing.
 */
export function getUserUsername(path) {
  return service({
    url: `/user/${path.username}`,
    method: 'get',
  })
}
/**
 * Updated user
 * @param {object} body - empty
 * @param {integer} body.id - empty
 * @param {string} body.username - User Name
 * @param {string} body.firstName - User First Name
 * @param {string} body.lastName - User Last Name
 * @param {string} body.email - User email
 * @param {string} body.password - User password
 * @param {string} body.phone - User phone
 * @param {integer} body.userStatus - User Status
 * @param {object} path - 路由参数
 * @param {string} path.username - name that need to be updated
 */
export function putUserUsername(path, body) {
  return service({
    url: `/user/${path.username}`,
    method: 'put',
    data: body,
  })
}
/**
 * Delete user
 * @param {object} path - 路由参数
 * @param {string} path.username - The name that needs to be deleted
 */
export function deleteUserUsername(path) {
  return service({
    url: `/user/${path.username}`,
    method: 'delete',
  })
}
/**
 * Logs user into the system
 * @param {object} query - 查询条件
 * @param {string} query.username - The user name for login
 * @param {string} query.password - The password for login in clear text
 */
export function getUserLogin(query) {
  return service({
    url: '/user/login',
    method: 'get',
    params: query,
  })
}
/**
 * Logs out current logged in user session
 */
export function getUserLogout() {
  return service({
    url: '/user/logout',
    method: 'get',
  })
}
/**
 * Create user
 * @param {object} body - empty
 * @param {integer} body.id - empty
 * @param {string} body.username - User Name
 * @param {string} body.firstName - User First Name
 * @param {string} body.lastName - User Last Name
 * @param {string} body.email - User email
 * @param {string} body.password - User password
 * @param {string} body.phone - User phone
 * @param {integer} body.userStatus - User Status
 */
export function postUser(body) {
  return service({
    url: '/user',
    method: 'post',
    data: body,
  })
}
