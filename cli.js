#!/usr/bin/env node

import moment from "moment-timezone";
import minimist from "minimist";
import fetch from "node-fetch";


const args = minimist(process.argv.slice(2))
let timezone = moment.tz.guess()


if (args.h) {
    console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE")
    console.log("    -h            Show this help message and exit.")
    console.log("    -n, -s        Latitude: N positive; S negative.")
    console.log("    -e, -w        Longitude: E positive; W negative.")
    console.log("    -z            Time zone: uses tz.guess() from moment-timezone by default.")
    console.log("    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.")
    console.log("    -j            Echo pretty JSON from open-meteo API and exit.")
    process.exit(0);
}

if (args.z) {
    timezone = args.z
}

let latitude = 1
if (args.n) {
    latitude = args.n
} 
if (args.s) {
    latitude = -args.s
} 
