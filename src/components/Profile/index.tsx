import React, { lazy } from 'react';
import './Profile.scss';
import { Languages } from '../../interfaces/Languages';

const ProfileEn = lazy(() => import('./ProfileEn'));
const ProfileEs = lazy(() => import('./ProfileEs'));

interface Props {
	lang: keyof Languages<any>;
}

function Profile({ lang }: Props) {
	return lang === 'en' ? <ProfileEn /> : <ProfileEs />;
}

export { Profile };
