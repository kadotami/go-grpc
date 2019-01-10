/**
 * @fileoverview gRPC-Web generated client stub for schedule
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.schedule = require('./schedule_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.schedule.ScheduleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.schedule.ScheduleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.schedule.ScheduleServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.schedule.ScheduleServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.schedule.CreateScheduleRequest,
 *   !proto.schedule.CreateScheduleResponse>}
 */
const methodInfo_ScheduleService_CreateSchedule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.schedule.CreateScheduleResponse,
  /** @param {!proto.schedule.CreateScheduleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.schedule.CreateScheduleResponse.deserializeBinary
);


/**
 * @param {!proto.schedule.CreateScheduleRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.schedule.CreateScheduleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.schedule.CreateScheduleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.schedule.ScheduleServiceClient.prototype.createSchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/schedule.ScheduleService/CreateSchedule',
      request,
      metadata,
      methodInfo_ScheduleService_CreateSchedule,
      callback);
};


/**
 * @param {!proto.schedule.CreateScheduleRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.schedule.CreateScheduleResponse>}
 *     The XHR Node Readable Stream
 */
proto.schedule.ScheduleServicePromiseClient.prototype.createSchedule =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createSchedule(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.schedule.ListScheduleRequest,
 *   !proto.schedule.ListScheduleResponse>}
 */
const methodInfo_ScheduleService_ListSchedule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.schedule.ListScheduleResponse,
  /** @param {!proto.schedule.ListScheduleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.schedule.ListScheduleResponse.deserializeBinary
);


/**
 * @param {!proto.schedule.ListScheduleRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.schedule.ListScheduleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.schedule.ListScheduleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.schedule.ScheduleServiceClient.prototype.listSchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/schedule.ScheduleService/ListSchedule',
      request,
      metadata,
      methodInfo_ScheduleService_ListSchedule,
      callback);
};


/**
 * @param {!proto.schedule.ListScheduleRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.schedule.ListScheduleResponse>}
 *     The XHR Node Readable Stream
 */
proto.schedule.ScheduleServicePromiseClient.prototype.listSchedule =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listSchedule(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.schedule;

