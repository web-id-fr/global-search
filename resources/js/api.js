import axios from "axios";
import {apiKey} from "@/helpers/constants";

const {REPOSITORIES, ISSUES, PULL_REQUESTS, SLACK_MESSAGES} = apiKey

const ax = (token) => { return axios.create({
    baseURL: 'http://global-search.test/api/octools/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
    }
})};

export const fetchEndpoint = (activeTab, query, token) => {
    switch (activeTab) {
        case REPOSITORIES : {
            return getRepositories(query, token)
        }
        case ISSUES : {
            return getIssues(query, token)
        }
        case PULL_REQUESTS : {
            return getPullRequests(query, token)
        }
        case SLACK_MESSAGES : {
            return getSlackMessages(query, token)
        }
    }
}

export const getRepositories = (query = "", token) => {
    return ax(token).get(`github/search-repositories?query=${query}`);
}

export const getIssues = (query = "", token) => {
    return ax(token).get(`github/search-issues?query=${query}`);
}

export const getPullRequests = (query = "", token) => {
    return ax(token).get(`github/search-pull-requests?query=${query}`);
}

export const getSlackMessages = (query = "", token) => {
    return ax(token).get(`slack/search-messages/${query}`);
}
