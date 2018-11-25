import Vue from 'vue';
import Vuex, { StoreOptions, Action, Getter, Mutation } from 'vuex';
import { Actions } from './enums';
import { Source, Level, Topic } from './models/index';
import * as Service from './services/index';

Vue.use(Vuex);

export default new Vuex.Store<{
    source?: Array<Source>,
    levels: {
        [sourceId: string]: Array<Level>;
    };
    topics: {
        [sourceId: string]: Array<Topic>;
    };
    [key: string]: any;
}>({
    state: {
        source: [
            {

            }
        ],
        levels: {
            EoT3y7nabE: []
        },
        topics: {
            EoT3y7nabE: []
        }
    },
    getters: {
        getLevelBySource: (state) => (sourceID: string) => {
            return state.levels[sourceID];
        },
        getTopicBySource: (state) => (sourceID: string) => {
            return state.topics[sourceID];
        }
    },
    mutations: {

    },
    actions: {
        setLevelBySource: ({ commit, state }, sourceId) => {
            if (state.levels[sourceId] && state.levels[sourceId].length) return;
            Service.LevelService.getLevelBySource(sourceId).then(data => {
                state.levels[sourceId] = data;
            });
        },
        setTopicBySource: ({ commit, state }, sourceId) => {
            if (state.topics[sourceId] && state.topics[sourceId].length) return;
            Service.TopicService.getTopicBySource(sourceId).then(data => {
                state.topics[sourceId] = data;
            });
        },
        selectTopic: ({ commit, state }, {sourceId, levelId}) => {
            for(var i in state.topics[sourceId]){
                if(state.topics[sourceId][i].id == levelId){
                    state.topics[sourceId][i].checked = !state.topics[sourceId][i].checked;
                    break;
                }
            }
        }
    }
});
