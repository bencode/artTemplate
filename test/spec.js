var art = require('../');


describe('test', function() {

    it('支持!语句', function() {
        var tpl = [
            '{{! var a = "hello world"}}',
            '{{a}}'
        ].join('');

        var fn = art.compile(tpl);
        fn({}).should.be.equal('hello world');
    });


    it('支持注释', function() {
        var tpl = [
            '{{// 这是个注释}}',
        ].join('');
        var fn = art.compile(tpl);
        fn({}).should.equal('');

        tpl = [
            '{{// ',
            '多行注释',
            '多行注释',
            '多行注释',
            '}}'
        ].join('\n');

        fn = art.compile(tpl);
        fn({}).should.equal('');
    });

});
