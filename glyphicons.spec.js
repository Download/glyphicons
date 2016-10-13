﻿var log = require('ulog')('glyphicons:spec')
var expect = require('chai').expect
var icons = require('./glyphicons')

describe('glyphicons', function(){
	it('contains lots of icons', function(){
		expect(icons).to.be.an('object')
		expect(icons.heart).to.be.a('string')
		for (icon in icons) {
			log.info(icon + '=' + icons[icon])
		}
	})
})