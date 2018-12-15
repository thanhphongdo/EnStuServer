import { User, Post } from "../model/index";
import { TopicCloud } from './topic';
import { WordCloud } from './word';
import { LevelCloud } from './level';
import { LearningSourceCloud } from './learning_source';

const topicCloud = new TopicCloud();
const wordCloud = new WordCloud();
const levelCloud = new LevelCloud();
const learningSourceCloud = new LearningSourceCloud();

import { addWord } from '../data/dump';
addWord();