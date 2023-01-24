<?php
/**
 * Created by PhpStorm.
 * User: exodus4d
 * Date: 29.03.15
 * Time: 20:50
 */

namespace Exodus4D\Pathfinder\Controller\Api;


use Exodus4D\Pathfinder\Controller;

class I18n extends Controller\Controller{

    /**
     * Gets translations
     * @param \Base $f3
     * @throws \Exception
     */
    public function get(\Base $f3){
        echo json_encode($f3->get('translation_data'));
    }


} 