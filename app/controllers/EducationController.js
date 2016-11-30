
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
 * Create an Education object
 */
exports.create = function(req, res) {

};

/**
 * Show the current Education
 */
exports.read = function(req, res) {

};

/**
 * Update an Education
 */
exports.update = function(req, res) {

};

/**
 * Delete an Education
 */
exports.delete = function(req, res) {

};

/**
 * List of objects
 */
exports.list = function(req, res, next) {
    Education.find().exec(function(err, eduObjects) {
        if(err){
          return next(err);
        } else {
            res.json(eduObjects);
        }
    });
};
