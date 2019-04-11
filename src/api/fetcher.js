import axios from 'axios';

const apiConfig = {
  baseURL: `http://35.237.128.222:8080`,
  dateRange: '/date_range',
  tickets: '/tickets',
  calls: '/calls',
};

export default class Fetcher {
  constructor() {
    this.api = axios.create({
      baseURL: apiConfig.baseURL,
      responseType: 'json',
    });
  }

  async getDateRange() {
    return this.api.get(apiConfig.dateRange);
  }

  getTickets = async (day = '2019-04-10') =>
    this.api.get(apiConfig.tickets, {
      params: {
        day,
      },
    });

  getCalls = async (day = '2019-04-10') =>
    this.api.get(apiConfig.calls, {
      params: {
        day,
      },
    });
}
