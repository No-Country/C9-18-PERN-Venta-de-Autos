const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { request } = require("express");
const MessageServices = require("../services/messages.services");

module.exports = {
  getAllBy: catchAsync(async (req, res, next) => {
    try {
      const { car_id, sender_id } = req.params;
      const result = await MessageServices.getByUserAndConversation(
        car_id,
        sender_id
      );
      endpointResponse({
        res,
        message: "All the messages on display",
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  send: catchAsync(async (req, res, next) => {
    try {
      const body = req.body;
      const result = await MessageServices.sendMessage(body);
      endpointResponse({
        res,
        message: "Message sent successfully",
        body: result,
        code: 201,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  edit: catchAsync(async (req, res, next) => {
    try {
      const newMessage = req.body;
      const {id} = req.params;
      const result = await MessageServices.editMessage(newMessage, id);
      endpointResponse({
        res,
        message: "Message edited successfully",
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  remove: catchAsync(async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await MessageServices.deleteMessage(id);
      endpointResponse({
        res,
        message: "Message deleted successfully",
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  
};
