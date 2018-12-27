import qs from 'qs'
import request from '../utils/request'
import { REST_URL } from '../constants'

export async function find(params) {
  return request(`${REST_URL}/user?${qs.stringify(params)}`)
}

export async function findOne(id) {
  return request(`${REST_URL}/user${id}`)
}

export async function save(params) {
  return request(`${REST_URL}/user`, {
    credentials: 'include',
    method: params.id ? 'POST' : 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(params),
  })
}

export async function remove(params) {
  return request(`${REST_URL}/user`, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(params),
  })
}

export async function login(params) {
  return request(`${REST_URL}/login`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: qs.stringify(params),
  })
}
