'use strict';
require('../lib/AsynHttpServer.js');

var chai = require('chai');
var chaihttp=require('chai-http');


chai.use(chaihttp);
chai.use(require('chai-datetime'));

var expect = chai.expect;

describe('our http server', function(){
	it('Time Request', function(done){

		chai.request('localhost:3000')  // domain
			.get('/time')   // request
			.end(function(err,res){
				expect(err).to.eql(null); 
				expect(res).to.have.status(200);
				var resText = res.text; 				
				resText.substr(18,28);

				var returnDate = new Date(resText);
				var currDate = new Date();
				
				expect(returnDate.getTime()).be.below(currDate.getTime());
				done();
			});

	});
	it('Greet User Request', function(done){
		chai.request('localhost:3000') 
		.get('/greet/Melissa')   // request
		.end(function(err,res){
			expect(err).to.eql(null); 
			expect(res).to.have.status(200);
			var resText = res.text; 
			resText = resText.replace(/\n/gm, '');
			expect(resText).to.eql('Welcome Melissa!!!');
			done();
		});

	});
	it('Greet User Request', function(done){
		chai.request('localhost:3000') 
		.get('/')   // request
		.end(function(err,res){
			expect(err).to.eql(null); 
			expect(res).to.have.status(200);
			var resText = res.text; 
			resText = resText.replace(/\n/gm, '');			
			expect(resText).to.eql('No Routes hit');
			done();
		});	
 	});

});
