@extends('backend.layouts.content')

@section('content')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Promocodes </h1>

    </section>

    <!-- Main content -->
    <section class="content">


        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Promocode List</h3>
                    </div>
                    
                    @include('backend.include.flashMessage')
                    
                    <!-- /.box-header -->
                    <div class="box-body table-responsive ">
                        <table class="table table-bordered table-hover">
                            <tr>
                                <th class="" style="min-width:50px;">@sortablelink('id', 'ID')</th>
                                <th class="" style="min-width:50px;">@sortablelink('code', 'Code')</th>
                                <th class="" style="min-width:50px;">@sortablelink('type', 'Type')</th>
                                <th class="" style="min-width:50px;">@sortablelink('discount', 'Discount')</th>
                                <th class="" style="min-width:50px;">@sortablelink('status', 'Status')</th>
                                <th class="" style="min-width:50px;">@sortablelink('expiry', 'Expiry')</th>
                                <th class="" style="min-width:50px;">@sortablelink('created_at', 'Created At')</th>
                                <th class="" style="min-width:50px;">@sortablelink('updated_at', 'Updated At')</th>

                                <th style="width: 200px">Actions</th>
                            </tr>

                            @foreach($promocodes as $promocode)
                            <tr>
                                <td>{{ $promocode->id }}</td>
                                <td>{{ $promocode->code }}</td>
                                <td>{{ $promocode->type }}</td>
                                <td>{{ $promocode->discount }} %</td>
                                <td>{!! Helper::promocodeStatuslabel($promocode->status) !!}</td>
                                <td>{{ $promocode->expiry }}</td>
                                <td>{{ $promocode->created_at->diffForHumans() }}</td>
                                <td>{{ $promocode->updated_at->diffForHumans() }}</td>
                                <td>
                                    <a href="{{route('admin.promocodes.edit',$promocode->id)}}" class="btn btn-default btn-sm" title="Edit"><i class="fa fa-edit"></i></a>

                                    <a href="#" class="btn btn-default btn-sm" title="Delete"
                                               onclick="if (confirm(&quot;Are you sure you want to delete ?&quot;)) { document.getElementById('deleteForm{{ $promocode->id }}').submit(); } event.returnValue = false; return false;"><i
                                                        class="fa fa-trash"></i></a>

                                    {!! Form::open(['method'=>'DELETE', 'action'=>['backend\PromocodeController@destroy', $promocode->id], 'id'=>'deleteForm'.$promocode->id]) !!}
                                    {!! Form::close() !!}
                                </td>
                            </tr>
                            @endforeach
                        </table>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer clearfix">
                        <ul class="pagination pagination-sm no-margin pull-right">
                            Page {{ $promocodes->currentPage() }}  , showing {{ $promocodes->count() }} records out of {{ $promocodes->total() }} total
                        </ul>
                    </div>

                    <div class="box-footer clearfix">
                        <ul class="pagination pagination-sm no-margin pull-right">
                            {{$promocodes->appends(Request::all())->links()}}
                        </ul>
                    </div>

                </div>
                <!-- /.box -->

                <!-- /.box -->
            </div>
            <!-- /.col -->

            <!-- /.col -->
        </div>
        <!-- /.row -->

    </section>
    <!-- /.content -->
</div>

@endsection