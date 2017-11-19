[![Build Status][travis-svg]][travis-url]
[![Dependency Status][david-deps-svg]][david-deps-url]

# Andor Polgar's CV generator

andor-cv is a command line tool for generating Andor Polgar's CV. For obvious reasons, it is used mostly by Andor. Otherwise, it would be interesting for you only if you were a tech recruiter or something.

## Install

You need to have at least node v9.1.0 to make it work.

    $ npm install andor-cv -g

or you can clone this repository and install it by yourself:

    $ git clone https://github.com/andormade/andor-cv.git
    $ cd andor-cv
    $ npm install -g

## Usage

Then running the command "andor-cv" will generate and save the CV to the current directory.

    $ andor-cv

Or you can just download the latest generated PDF from [here](https://github.com/andormade/andor-cv/releases).

This code is released under the MIT license, so feel free to do whatever you want with it.

[travis-svg]: https://travis-ci.org/andormade/andor-cv.svg?branch=master
[travis-url]: https://travis-ci.org/andormade/andor-cv
[david-deps-svg]: https://david-dm.org/andormade/andor-cv.svg
[david-deps-url]: https://david-dm.org/andormade/andor-cv
