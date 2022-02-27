@extends('layouts.app')

@section('content')
<div class="my-login-page">
    <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-md-center h-100">
                <div class="card-wrapper">
                    <div class="brand">
                        <img src="{{asset('assets/logo/piassa-logo.png')}}" alt="logo">
                    </div>
                    <div class="card fat">
                        <div class="card-body">
                            <h4 class="card-title">{{__('titles.login')}}</h4>
                            <form method="POST" action="{{ route('login') }}">
                                <div class="form-group">
                                    <label for="phone">{{__('titles.phone')}}</label>
                                    <input id="phone" type="text" class="form-control @error('phone') is-invalid @enderror" placeholder="{{__('titles.phone')}}" name="phone" value="{{ old('phone') }}" required autofocus>
                                    @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="form-group mt-2">
                                    <label for="password">{{__('titles.password')}}
                                    </label>
                                    <input id="password" type="password" placeholder="{{__('titles.password')}}" class="form-control @error('password') is-invalid @enderror" name="password" required data-eye>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="form-group mt-3">
                                    <button type="submit" class="btn btn-primary piassa-color btn-block">
                                        Connexion
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="footer">
                        Copyright &copy; 2022 &mdash; piassa
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
