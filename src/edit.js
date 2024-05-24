import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps(
      {className: 'formo-slider'}
    ) }>
			<InnerBlocks 
        allowedBlocks={['create-block/formo-slider-slide-cheese']}
        template={[
          ['create-block/formo-slider-slide-cheese'],
          ['create-block/formo-slider-slide-cheese'],
          ['create-block/formo-slider-slide-cheese'],
        ]}
      />
      <InspectorControls>
        <PanelBody title={__('Slider Settings')}>
          <p>{__('How long will each slide be visible?')}</p>
          <TextControl
            type='number'
            label={__('Duration (in seconds)')}
            value={attributes.delay}
            onChange={(value) => {
              setAttributes({delay: value});
            }}
          />
        </PanelBody>
      </InspectorControls>
		</div>
	);
}
