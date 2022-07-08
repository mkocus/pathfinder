<?php

/**
 * Small script for generating i18n files from the template-html files
 * run: php bin/i18n-scanner.php
 */

include_once '../vendor/autoload.php';

$translation = \Gettext\Translations::create();

foreach (glob('public/templates/**/*.html') as $file) {
    $str = file_get_contents($file);
    $count = preg_match_all('/__\(\'((?:.|\n)*?)\'(?:,|\))/im', $str, $matches);
    if($count > 0) {
        foreach ($matches[1] as $string) {
            $trans = stripslashes(preg_replace('/\s\s+/', ' ',$string));
            $translation->addOrMerge(\Gettext\Translation::create(null, $trans)->translate($trans));
        }
    }
    $count = preg_match_all('/\{\{#translate}}((?:.|\n)*?)\{\{\/translate}}/im', $str, $matches);
    if($count > 0) {
        foreach ($matches[1] as $string) {
            $trans = stripslashes(preg_replace('/\s\s+/', ' ',$string));
            $translation->addOrMerge(\Gettext\Translation::create(null, $trans)->translate($trans));
        }
    }
}
foreach (glob('js/app/**/*.js') as $file) {
    $str = file_get_contents($file);
    $count = preg_match_all('/__\(\'((?:.|\n)*?)\'(?:,|\))/im', $str, $matches);
    if($count > 0) {
        foreach ($matches[1] as $string) {
            $trans = stripslashes(preg_replace('/\s\s+/', ' ',$string));
            $translation->addOrMerge(\Gettext\Translation::create(null, $trans)->translate($trans));
        }
    }
}
$poGen = new \Gettext\Generator\PoGenerator();
$poGen->generateFile($translation, 'template.po');