<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Swagger(
 *   schemes={"http"},
 *   host="localhost:80",
 *   basePath="/",
 *   @OA\Info(
 *         version="1.0.0",
 *         title="Chat so to speak API",
 *         description="This is the most POWERFUL API EVER",
 *         termsOfService="",
 *         @OA\Contact(
 *             email="contact@mysite.com"
 *         ),
 *         @OA\License(
 *             name="Private License",
 *             url="URL to the license"
 *         )
 *     ),
 * )
 */

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
