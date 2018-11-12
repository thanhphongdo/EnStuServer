import Vue from 'vue';
import Vuex, { StoreOptions, Action, Getter, Mutation } from 'vuex';
import { Actions } from './enums';
import { Source, Level } from './models/index';
import * as LevelService from './services/index';

Vue.use(Vuex);

export default new Vuex.Store<{
    source?: Array<Source>,
    levels: {
        [sourceId: string]: Array<Level>;
    };
    [key: string]: any;
}>({
    state: {
        source: [
            {

            }
        ],
        levels: {
            source_1: []
        }
    },
    getters: {
        getLevelBySource: (state) => (sourceID: string) => {
            return state.levels[sourceID];
        }
    },
    mutations: {

    },
    actions: {
        setLevelBySource: ({ commit, state }, sourceId) => {
            if (state.levels[sourceId] && state.levels[sourceId].length) return;
            LevelService.getLevelBySource(sourceId).then(data => {
                state.levels[sourceId] = data;
            });
        }
    }
});
