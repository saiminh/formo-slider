import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';
import { useState } from '@wordpress/element';

export default function Edit({attributes, setAttributes}) {

  const [position, setPosition] = useState(attributes.bulletposition);

	return (
		<div { ...useBlockProps(
      {className: 'formo-slider'}
    ) }>
			<InnerBlocks 
        allowedBlocks={['create-block/formo-slider-slide-cheese', 'create-block/formo-slider-slide-recipe']}
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
          <SelectControl
              label="Bullet position"
              value={ position }
              options={ [
                  { label: 'Bullets on the right', value: 'bullets-right' },
                  { label: 'Bullets in the center', value: 'bullets-center' },
              ] }
              onChange={ ( value ) => { 
                setAttributes( { bulletposition: value } );
                setPosition( value );
              } }
          />

        </PanelBody>
      </InspectorControls>
		</div>
	);
}
