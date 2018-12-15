import * as Configs from './../constants/Configs';
import axios from 'axios';

var callApi = (url,method='GET',body=null) => {
	return axios({
		method: method,
		url: `${Configs.API_BASE_URL}${url}`,
		data: body
	}).catch(err => {
		console.log(err)
	});
}
export default callApi;