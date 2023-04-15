<?php

namespace Piwik\Plugins\ExportPdf;

use Piwik\Plugin;

class ExportPdf extends Plugin
{
    public function registerEvents()
    {
        return [
            'AssetManager.getStylesheetFiles' => 'getStylesheetFiles',
            'AssetManager.getJavaScriptFiles' => 'getJavaScriptFiles'
        ];
    }

    public function getStylesheetFiles(&$stylesheets)
    {
        $stylesheets[] = "plugins/ExportPdf/stylesheets/exportpdf.less";
    }

    public function getJavaScriptFiles(&$jsFiles)
    {
        $jsFiles[] = "plugins/ExportPdf/javascripts/exportpdf.js";
    }
}
