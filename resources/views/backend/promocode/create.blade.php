@extends('backend.layouts.content')
@section('content')

<div class="content-wrapper" style="">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1> Add promocode </h1>
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
                        <h3 class="box-title">New Promocode Info</h3>
                    </div>

                    @include('backend.include.error')
                    @include('backend.include.flashMessage')



                   {!! Form::open(['method'=>'POST', 'action'=>'backend\PromocodeController@store','id' => 'promocode_form']) !!}
                        
                        <div class="box-body">
                            <div class="col-md-6">

                                <div class="form-group">
                                {!! Form::label('code', 'Code') !!}
                                {!! Form::text('code', null, ['class'=>'form-control']) !!}
                                </div>

                                <div class="form-group">
                                {!! Form::label('type', 'Type') !!}
                                {!! Form::select('type', ['' => 'Choose an option', 'Free' => 'Free', 'Discount' => 'Discounted'], null, ['class' => 'form-control', 'id' => 'type', 'required']) !!}
                                </div>

                                <div class="form-group" id="discount_field" style="display:none">
                                {!! Form::label('discount', 'Discount') !!}
                                {!! Form::text('discount', null, ['class' => 'form-control', 'required', 'maxlength' => '2', 'id' => 'discount']) !!}
                                </div>

                                <div class="form-group">
                                {!! Form::label('expiry', 'Expiry') !!}
                                {!! Form::input('date', 'expiry', null, ['class' => 'form-control', 'required' => 'required', 'id' => 'expiry']) !!}
                                </div>

                        
                            </div>
                        </div>

                        <div class="box-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
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
$(function() {
    $('#type').on('change', function() {
        let type_value = $('#type').val();

        if (type_value == "Discount") {
            $('#discount_field').show(200);
            $('#discount').val('');
        } else {
            $('#discount_field').hide(200);
            $('#discount').val('100');

        }
    });

    
});

  let today = new Date().toISOString().split('T')[0];
     document.getElementById('expiry').min = today;


$.validator.addMethod("futureDate", function(value, element) {
  var currentDate = new Date();
  var inputDate = new Date(value);
  return this.optional(element) || inputDate > currentDate;
}, "Promocode Validity must be of minimum 1 Day");

$.validator.addMethod("uppercase", function(value, element) {
  return this.optional(element) || /^[A-Z0-9]+$/.test(value);
}, "Please enter Uppercase letters and Digits only.");

jQuery.validator.addMethod('digits', function(value, element) {
    return this.optional(element) || /^[0-9]+$/i.test(value);
}, 'Enter Value in Digits Only');

$('#promocode_form').validate({
    rules: {
     code: {required:true,
            uppercase:true,},
     discount: {"number": true},
     expiry:{futureDate:true}
   },
   messages: {
          discount: {"number": "Please Enter a Valid Discount Value"},
   }
});
</script>

@endsection