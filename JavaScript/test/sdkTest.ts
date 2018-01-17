/// <reference types="mocha" />

import ApiMock from './helpers/apiMock';
import ApiClient, {CancelError} from "../src/api/apiClient";
import ApiEndpoint from "../src/api/apiEndpoint";
import {ApiEnvironment} from "../src/api/apiEnvironment";
import ApiRequest from "../src/api/apiRequest";
import SdkConstants from "../src/sdk/sdkConstants";
import {BackendError, LowLevelError} from "../src/errors/errors";
import Proto from '../src/proto';

import {assert} from 'chai';

import * as Long from 'long';
import {makeCancelable} from "../src/api/apiPromise";
import {CancelToken} from "../src/api/apiClient";

describe('API', () => {

  afterEach(function () {
    ApiMock.restore();
  });

  describe('ApiPromise', () => {

    it('should be cancelable', (done) => {

      var token = new CancelToken;

      let promise = api.createApiRequest('brandUuid')
        .setFlags(SdkConstants.COLLECTION_FLAG_INCLUDE_ALL)
        .setCancelToken(token)
        .getBrandWrite('d32cbe63-c12d-4e3f-bb55-2ea4f5413111').then((entity) => {
          done(new Error('Did not cancel'));
      }).catch(function (error: any) {
          assert.instanceOf(error, CancelError);
          done();
      });

      token.cancel();

    });

    it('uses finally', (done) => {

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 100);
      });

      promise.then((value: number) => {
        assert.equal(value, 1);
      }).finally(() => {
        done();
      });

    });

    it('should be cancelable via function', (done) => {

      const cancelable = makeCancelable(new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 100);
      }));

      cancelable.promise.then(() => {
        done(new Error('Not canceled'));
      }).catch((reason: any) => {
        assert.isTrue(reason.isCanceled);
        done();
      });

      cancelable.cancel();

    });

  });

  let api = new ApiClient(null, ApiEnvironment.STAGING, null);

  it('should create ApiRequest', () => {
    let request = api.createApiRequest('brandUuid');
    assert.instanceOf(request, ApiRequest);
  });

  it('should replace uuid correctly', () => {
    let request = api.createApiRequest('brandUuid');

    assert.equal(request.buildApiUrl('/asdf/:id', '1234', true), '/asdf/1234/anonymous?flags=0');
    assert.equal(request.buildApiUrl('/asdf/:id', '', true), '/asdf/:id/anonymous?flags=0');
    assert.equal(request.buildApiUrl('/asdf/:id', null, true), '/asdf/:id/anonymous?flags=0');
  });

  it('should use right endpoint', () => {
    assert.equal(ApiClient.ENDPOINT_MDIDX.getApiEndpointUrl(ApiEnvironment.STAGING, false), 'https://mdidx-staging.contidio.com:31446');
    assert.equal(ApiClient.ENDPOINT_MDIDX.getApiEndpointUrl(1, false), 'https://mdidx-staging.contidio.com:31446');
  });

  it('should build the right url', () => {

    let request = api.createApiRequest('brandUuid');

    request.setQueryData({
      startIndex: null,
      count: null,
      orderBy: null,
      orderDirection: null,
      terms: '',
      termsAnd: null,
      recursive: null,
      locale: '',
      type: [],
      binaryType: null,
      locales: null,
      dimension: null,
      uploaded: null,
      orientation: null,
      videoFormat: null,
      videoAspectRatio: [],
      duration: null,
      pageCount: null,
      source: null,
      licenseId: null,
      entityId: null,
      include: null,
      projectState: null
    });

    assert.equal(request.buildApiUrl('', '', true), '/anonymous?flags=0');

    request.setFlags(Long.fromNumber(3)).setQueryData({
      startIndex: 1,
      count: 10,
      orderBy: Proto.QueryOrderBy.ORDER,
      orderDirection: Proto.QueryOrderDirection.ASC,
      terms: 'terms',
      termsAnd: true,
      recursive: true,
      locale: 'de',
      type: [Proto.EntityType.BRAND, Proto.EntityType.ASSET],
      binaryType: [Proto.BinaryType.IMAGE, Proto.BinaryType.AUDIO],
      locales: ['de', 'en'],
      dimension: [Proto.Dimension.LARGE, Proto.Dimension.MEDIUM, Proto.Dimension.SMALL],
      uploaded: Proto.Uploaded.ALL_TIME,
      orientation: [Proto.Orientation.LANDSCAPE, Proto.Orientation.PORTRAIT, Proto.Orientation.SQUARE],
      videoFormat: [Proto.VideoFormat.HD],
      videoAspectRatio: [Proto.VideoAspectRatio.FOUR_TO_THREE],
      duration: [Proto.Duration.LONG],
      pageCount: [Proto.PageCount.ABOVE_FIFTY_PAGES],
      source: [Proto.Source.CONTIDIO],
      licenseId: ['1234', '2345'],
      entityId: ['1234'],
      include: false,
      projectState: [Proto.ProjectState.OPEN]
    });

    assert.equal(request.buildApiUrl('', '', true), '/anonymous?flags=3&startIndex=1&count=10&orderBy=1&orderDirection=1&terms=terms&termsAnd=1&recursive=1&locale=de&types=0,2&binaryTypes=1,2&locales=de,en&dimensions=3,2,1&uploaded=1&orientations=2,1,3&videoFormats=2&videoAspectRatios=1&durations=3&pageCounts=5&sources=1&licenseIds=1234,2345&entityIds=1234&include=0&projectStates=1');

  });

  it('should make flags default 0', () => {
    let request = api.createApiRequest('brandUuid');
    assert.equal(request.buildApiUrl('', '', true), '/anonymous?flags=0');
  });

  it('should be chainable', () => {
    let request = api.createApiRequest('brandUuid').setFlags(Long.fromNumber(0)).setQueryData({count: 1});
    assert.instanceOf(request, ApiRequest);
  });

  describe('#getBrand', () => {

    it('should get back brand', (done) => {

      ApiMock.mockSuccess(<Proto.Entity>{
        uuid: 'd32cbe63-c12d-4e3f-bb55-2ea4f5413111'
      });

      api.createApiRequest('brandUuid').getBrandWrite('d32cbe63-c12d-4e3f-bb55-2ea4f5413111').then((entity) => {
        assert.equal(entity.uuid, 'd32cbe63-c12d-4e3f-bb55-2ea4f5413111');
        done();
      }).catch(function (error: any) {
        done(error);
      });

    });

    it('should get back brand, this time from a live server', (done) => {
      api.createApiRequest('brandUuid')
        .setFlags(SdkConstants.COLLECTION_FLAG_INCLUDE_ALL)
        .getBrand('d32cbe63-c12d-4e3f-bb55-2ea4f5413111').then((entity) => {

        assert.equal(entity.uuid, 'd32cbe63-c12d-4e3f-bb55-2ea4f5413111');
        assert.equal(entity.brand.brandType, Proto.BrandType.BRAND_TYPE_CUSTOM);

        done();
      }).catch(function (error: any) {
        done(error);
      });
    });

    it('should result in a transport error', (done) => {
      api.createApiRequest('brandUuid')
        .setFlags(SdkConstants.COLLECTION_FLAG_INCLUDE_ALL)
        .testTransportError().then((entity) => {
        assert.isTrue(false);
        done();
      }).catch(function (error: Error) {
        assert.isFalse(error instanceof BackendError);
        assert.isTrue(error instanceof LowLevelError);

        done();
      });
    });

    it('should result in a NotFoundBackendError', (done) => {
      api.createApiRequest('brandUuid')
        .setFlags(SdkConstants.COLLECTION_FLAG_INCLUDE_ALL)
        .getBrandWrite('d32cbe63-c12d-4e3f-bb55-2ea4f5413aaa').then((entity) => {
        assert.isTrue(false);
      }).catch(function (error: Error) {
        if (error instanceof BackendError) {
          assert.equal(error.errorCode, Proto.BackendErrorCode.BRAND_NOT_FOUND);
        } else {
          assert.isTrue(false);
        }

        done();
      });
    });

    /*it('should upload a file', (done) => {
      // TODO really upload a file

      /* TODO api.createApiRequest('brandUuid')
        .createEntityWithBinaries(Proto.EntityType.ASSET, {
            uuid: 'd32cbe63-c12d-4e3f-7777-2ea4f5413111',
            putLocale: [{
              locale: 'en',
              name: 'C 220 Side picture',
              putBinarySet: [{
                uuid: Long.fromNumber(1),
                putUploadedBinary: [{
                  binaryPurpose: Proto.BinaryPurpose.ASSET_ASSET
                }]
              }]
            }]
          },
          [ "test" ]
        ).then((entity) => {
          done();
        }).catch(function (error: Error) {
          done();
        });

      done();
    }); */
  });
});
