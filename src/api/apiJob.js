import axios from 'axios';
import config from '../config/config';

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/jobs`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/jobs/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/jobs`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (payload) => {
  try {
    const result = await axios.put(
      `${config.domain}/jobs/${payload.job_id}`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteRow = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/jobs/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

export default { list, findOne, create, update, deleteRow };
