"use strict";

const ejs = require('ejs');
const path = require('path');

const express = require('express');
const app = express();

const guessPort = require('./utils/port');
const port = guessPort();