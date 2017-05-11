const request = require('supertest')(require('../app'));
const should = require('should');

describe('POST /auth/signup는', ()=>{
  describe('성공시', ()=>{
    let body;
    before(done=>{
      request.post("/auth/signup").send({email: "a", passwd: "a", name:"a"})
      .expect(200).end((err, res)=>{
        body = res.body;
        done();
      });
    });

    it("token을 반환한다", (done)=>{
        body.should.have.property('token');
    });
    it("name을 반환한다", (done)=>{
        body.should.have.property('name');
    });
    it("email을 반환한다", (done)=>{
        body.should.have.property('email');
    });
  });
});
