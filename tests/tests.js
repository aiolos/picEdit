QUnit.test( "Layout tests form 1", function( assert ) {
  assert.equal( $('#form1 .picedit_box').width(), 400, "Form1: picedit_box is 400px width" );
});

QUnit.test( "Layout tests form 2", function( assert ) {
    $('#uploadbox2').picEdit({
        defaultImage: 'lib/default-user-image.png',
        maxWidth: 300
    });
    stop();
    setTimeout(function() {
        start();
            assert.equal( $('#form2 .picedit_box').width(), 300, "Form2: picedit_box is 300px width" );
            assert.ok( !$('#form2 .picedit_drag_resize').hasClass('active'), "Form2: drag_resize has no class active" );
            $('#form2 .ico-picedit-insertpicture').click();
            assert.ok( $('#form2 .picedit_drag_resize').hasClass('active'), "Form2: drag_resize has class active" );
            $('#form2 .picedit_drag_resize_box_elements .ico-picedit-checkmark').click();
        }, 500);
});
QUnit.test("Tests for form 3", function(assert) {
    $('#uploadbox3').picEdit();
    assert.ok( !$('#form3 .picedit_message').hasClass('active'), "Form3: message has no class active" );
    $('#uploadbox3').picEdit('set_loading', 'loading');
    assert.ok( $('#form3 .picedit_message').hasClass('active'), "Form3: message has class active" );
    assert.ok( $('#uploadbox3').picEdit('check_browser_capabilities'), "browser capabilities available");
    $('#uploadbox3').picEdit('set_default_image', 'lib/default-user-image.png');
    stop();
    setTimeout(function() {
        start();
        $('#uploadbox3').picEdit('rotate_ccw');

        stop();
        setTimeout(function() {
            start();
            $('#uploadbox3').picEdit('rotate_cw');

            stop();
            setTimeout(function() {
                start();
                $('#uploadbox3').picEdit('pen_tool_open');
                $('#uploadbox3').picEdit('pen_tool_close');
                stop();
                setTimeout(function() {
                    start();
                    $('#uploadbox3').picEdit('set_messagebox', 'the text', 4000, true);
                }, 200);
            });
        }, 200);
    }, 200);
});
