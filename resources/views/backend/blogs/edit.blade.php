@extends('backend.layouts.content')
@section('header')
<style>
    .label-as-badge:hover{
        cursor: pointer;
    }
</style>
@endsection
@section('content')

<div class="content-wrapper" style="">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1> Edit Blog </h1>
        <ol class="breadcrumb">
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">


        <div class="row">
            <!-- left column -->
            <div class="col-md-12">
                <!-- general form elements -->
                <div class="box box-info">
                    <div class="box-header with-border">
                        <h3 class="box-title">Blog Info</h3>
                    </div>

                    @include('backend.include.error')

                    {!! Form::model($blog, ['method'=>'PATCH', 'action'=>['backend\BlogController@update', $blog->id], 'files'=>true]) !!}

                    <div class="box-body">
                        <div class="col-md-6">
                            <div class="form-group">
                                {!! Form::label('title', 'Title') !!}
                                {!! Form::text('title', null, ['class'=>'form-control']) !!}
                            </div>

                            <div class="form-group">
                                {!! Form::label('subtitle', 'Sub-Title') !!}
                                {!! Form::textarea('subtitle',null,['class'=>'form-control', 'size' => '30x4']) !!}
                            </div>

                            <div class="form-group">
                                {!! Form::label('description', 'Description') !!}
                                {!! Form::textarea('description',null,['class'=>'form-control textarea']) !!}
                            </div>

                            <div class="form-group">
                                {!! Form::label('sort', 'Order') !!}
                                {!! Form::text('sort', null, ['class'=>'form-control']) !!}
                            </div>

                            <div class="form-group">
                                {!! Form::checkbox('status', '1', null, ['id'=>'status', 'class'=>'form-control']) !!}
                                {!! Form::label('status', '&nbsp;Active') !!}
                            </div>

                            <div class="form-group row">
                                <div class="col-md-8">
                                    {!! Form::label('thumbnail', 'Thumbnail1') !!}
                                    {!! Form::file('thumbnail', null, ['class'=>'form-control', 'id'=>'thumbnail']) !!}
                                    {!! Form::hidden('thumbnail_old', $blog->thumbnail , ['class'=>'form-control', 'id'=>'thumbnail_old']) !!}
                                </div>
                                <div class="col-md-3">
                                    <img src="{{ $blog->thumbnail?asset('storage/'.$blog->thumbnail):asset('images/dummy.png') }}" id="thumbnailPreview" alt="" style="width: 100px; height: 100px;">
                                </div>
                                <div class="col-md-1">
                                    <span onclick="resetImage()" class="label label-danger label-as-badge">Delete</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-8">
                                    {!! Form::label('thumbnail2', 'Thumbnail2') !!}
                                    {!! Form::file('thumbnail2', null, ['class'=>'form-control', 'id'=>'thumbnail2']) !!}
                                    {!! Form::hidden('thumbnail2_old', $blog->thumbnail2 , ['class'=>'form-control','id'=>'thumbnail2_old']) !!}
                                </div>
                                <div class="col-md-3">
                                    <img src="{{ $blog->thumbnail2?asset('storage/'.$blog->thumbnail2):asset('images/dummy.png') }}" id="thumbnail2Preview" alt="" style="width: 100px; height: 100px;">
                                </div>
                                <div class="col-md-1">
                                    <span onclick="resetImage2()" class="label label-danger label-as-badge">Delete</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /.box-body -->


                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                    {!! Form::close() !!}
                </div>


            </div>
            <!--/.col (left) -->
            <!-- right column -->
            <div class="col-md-6">
                <!-- Horizontal Form -->

                <!-- /.box -->
                <!-- general form elements disabled -->

                <!-- /.box -->
            </div>
            <!--/.col (right) -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
</div>

@endsection

@section('scripts')

<script>

    $(function () {
        $('input[type="checkbox"]').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
        
        $(".textarea").wysihtml5();
    });

	function readURL(input) {
        idName = input.id
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $("#"+idName+"Preview")
                    .attr("src", e.target.result)
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#thumbnail").change(function() {
        readURL(this);
    });
    $("#thumbnail2").change(function() {
        readURL(this);
    });
	function resetImage(){
        $('#thumbnail').val('')
        $('#thumbnail_old').val('')
        $('#thumbnailPreview').attr('src',"{{asset('images/dummy.png') }}")
    }

    function resetImage2(){
        $('#thumbnail2').val('')
        $('#thumbnail2_old').val('')
        $('#thumbnail2Preview').attr('src',"{{asset('images/dummy.png') }}")
    }
</script>

@endsection