#!/usr/bin/env node
import readlineSync, { question } from 'readline-sync';
import hello from '../src/cli.js';
import {name, getRandomInt, } from '../src/cli.js';
import isEven from '../src/games/brain-even.js';
hello()
isEven()
