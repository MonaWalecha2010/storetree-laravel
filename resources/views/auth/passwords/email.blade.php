@extends('frontend.layouts.app')
@section('header')
    <style>
        .card{
            margin: 35px 0;
            box-shadow: 0 0 5px rgba(0,0,0,.3);
        }
        .card-header{
            background: #243E8F;
            color: #fff;
        }
        .card-header h3{
            padding: 10px 20px; 
        }
        .card-body{
            padding: 20px 30px;
        }
        .justify-content-center{
            display: grid;
            grid-template-columns: 600px;
            justify-content: center;
        }
        .reset-pass label, .reset-pass input{
            font-size: 18px;
            padding: 20px 5px;
        }
        .reset-pass label{
            padding-top: 10px;
        }
        .footer_button{
           margin-left: 25px;
           padding: 10px;
        }
    </style>
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header"><h3>{{ __('Reset Password') }}</h3></div>

                <div class="card-body reset-pass">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-8">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary footer_button">
                                    {{ __('Send Password Reset Link') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
