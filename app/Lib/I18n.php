<?php

namespace Exodus4D\Pathfinder\Lib;

use Gettext\Loader\PoLoader;
use Gettext\Translations;

class I18n extends \Prefab {

    /**
     * @var \Gettext\Translations
     */
    private $translations;
    /**
     * @var string
     */
    private $language;

    /**
     * @param $f3
     */
    public function __construct($f3)
    {
        $this->language = $f3->get('I18N.language');
        if (empty($this->language)) {
            $this->language = 'en';
        }
        $locales_path = $f3->get('I18N.path');


        $loader = new PoLoader();
        $this->translations = Translations::create();
        if(file_exists($locales_path . $this->language . '.po')) {
            $this->translations = $loader->loadFile($locales_path . $this->language . '.po');
        }

        $f3->set('__', function ($message, ...$replace) {$this->translate($message, ...$replace);});
        $f3->set('translation_data', $this->translations->toArray());
    }

    /**
     * Translates the string into the language configured
     * @param $message
     * @param ...$replace
     * @return void
     */
    private function translate($message, ...$replace) {
        $message = preg_replace('/\s\s+/', ' ', $message);
        $translation = $this->translations->find(null, $message);
        if($translation && $translation->getTranslation() !== '') {
            echo sprintf($translation->getTranslation(), ...$replace);
            return;
        }
        echo sprintf($message, ...$replace);
    }


}