import axios from "axios";
import {apiKey} from "@/helpers/constants";

const {REPOSITORIES, ISSUES, PULL_REQUESTS, SLACK_MESSAGES} = apiKey

const ax = axios.create({
    baseURL: 'http://toad.test/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : 'Bearer WK2gnnSGvYoNYL8UU60jr8vR8WBmiZ9cCL3rCZVdKH8pR1ZIlMIRGpzZJondcnB73tpcGbIlPsKt4EaRqDHpdpLKa84mvun7c5otha0GQm78LybwS1wPBc1jJBq83ujS'
    }
});

export const fetchEndpoint = (activeTab, query) => {
    switch (activeTab) {
        case REPOSITORIES : {
            return getRepositories(query)
        }
        case ISSUES : {
            return getIssues(query)
        }
        case PULL_REQUESTS : {
            return getPullRequests(query)
        }
        case SLACK_MESSAGES : {
            return getSlackMessages(query)
        }
    }
}

export const getRepositories = (query = "") => {
    return ax.get(`github/search-repositories/${query}`);
}

export const getIssues = (query = "") => {
    return ax.get(`github/search-issues/${query}`);
}

export const getPullRequests = (query = "") => {
    return ax.get(`github/search-pull-requests/${query}`);
}

export const getSlackMessages = (query = "") => {
    return ax.get(`slack/search-messages/${query}`);
}
