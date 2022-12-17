<?php

namespace App\Http\Controllers\Api;
use App\Models\Medium;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ImageUploadController extends Controller
{
    public function upload(Request $request){
        $fileName=$request->file('file')->getClientOriginalName();
        $request->file('file')->storeAs('public/uploads', $fileName, 'public');

        $medium = new Medium();

        $medium->url = "/storage/uploads/".$fileName;

        $medium->save();

        return response()->json(['location'=> "/storage/uploads/".$fileName]);



    }
}
